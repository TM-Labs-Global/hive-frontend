import gsap from 'gsap';
import { getPointerPos, getMouseDistance, lerp } from '@/lib/motion-trail';

export class TrailImage {
    DOM: { el: HTMLElement; inner: HTMLElement | null };
    defaultStyle: { scale: number; x: number; y: number; opacity: number };
    rect: DOMRect;
    timeline: gsap.core.Timeline | null = null;

    constructor(DOM_el: HTMLElement) {
        this.DOM = {
            el: DOM_el,
            inner: DOM_el.querySelector('.trail-img-inner')
        };
        this.defaultStyle = {
            scale: 1,
            x: 0,
            y: 0,
            opacity: 0
        };
        this.rect = this.DOM.el.getBoundingClientRect();
        this.initEvents();
    }

    initEvents() {
        window.addEventListener('resize', () => {
            gsap.set(this.DOM.el, this.defaultStyle);
            this.getRect();
        });
    }

    getRect() {
        this.rect = this.DOM.el.getBoundingClientRect();
    }
}

export class ImageTrail {
    DOM: { el: HTMLElement };
    images: TrailImage[];
    imagesTotal: number;
    imgPosition: number;
    zIndexVal: number;
    activeImagesCount: number;
    isIdle: boolean;
    lastAngle: number;
    threshold: number;
    angle: number = 0;
    
    mousePos: { x: number; y: number };
    cacheMousePos: { x: number; y: number };
    lastMousePos: { x: number; y: number };

    constructor(DOM_el: HTMLElement) {
        this.DOM = {el: DOM_el};
        this.images = [...this.DOM.el.querySelectorAll<HTMLElement>('.trail-img')].map(img => new TrailImage(img));
        this.imagesTotal = this.images.length;
        this.imgPosition = 0;
        this.zIndexVal = 1;
        this.activeImagesCount = 0;
        this.isIdle = true;
        this.lastAngle = 0;
        this.threshold = 80;
        
        this.mousePos = {x: 0, y: 0};
        this.cacheMousePos = {...this.mousePos};
        this.lastMousePos = {...this.mousePos};

        const handlePointerMove = (ev: any) => {
            if (ev.touches) {
                this.mousePos = getPointerPos(ev.touches[0]);
            } else {
                this.mousePos = getPointerPos(ev);
            }
        };

        window.addEventListener('mousemove', handlePointerMove);
        window.addEventListener('touchmove', handlePointerMove);

        const onPointerMoveEv = () => {
            this.cacheMousePos = {...this.mousePos};
            requestAnimationFrame(() => this.render());
            window.removeEventListener('mousemove', onPointerMoveEv);
            window.removeEventListener('touchmove', onPointerMoveEv);
        };
        window.addEventListener('mousemove', onPointerMoveEv);
        window.addEventListener('touchmove', onPointerMoveEv);
    }

    render() {
        let distanceVal = getMouseDistance(this.mousePos, this.lastMousePos);
        
        if ( distanceVal > this.threshold ) {
            this.showNextImage();
            this.lastMousePos = this.mousePos;
        }

        this.cacheMousePos.x = lerp(this.cacheMousePos.x || this.mousePos.x, this.mousePos.x, 0.1);
        this.cacheMousePos.y = lerp(this.cacheMousePos.y || this.mousePos.y, this.mousePos.y, 0.1);

        if ( this.isIdle && this.zIndexVal !== 1 ) {
            this.zIndexVal = 1;
        }

        requestAnimationFrame(() => this.render());
    }

    showNextImage() {
        let dx = this.mousePos.x - this.cacheMousePos.x;
        let dy = this.mousePos.y - this.cacheMousePos.y;

        this.angle = Math.atan2(dy, dx) * (180 / Math.PI);
        if (this.angle < 0) this.angle += 360;
        if (this.angle > 90 && this.angle <= 270) this.angle += 180;

        const isMovingClockwise = this.angle >= this.lastAngle;
        this.lastAngle = this.angle;
        let startAngle = isMovingClockwise ? this.angle - 10 : this.angle + 10;

        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist !== 0) {
            dx /= dist;
            dy /= dist;
        }

        dx *= dist/150;
        dy *= dist/150;

        ++this.zIndexVal;
        this.imgPosition = this.imgPosition < this.imagesTotal-1 ? this.imgPosition+1 : 0;
        const img = this.images[this.imgPosition];
        
        gsap.killTweensOf(img.DOM.el);

        img.timeline = gsap.timeline({
            onStart: () => this.onImageActivated(),
            onComplete: () => this.onImageDeactivated()
        })
        .fromTo(img.DOM.el, {
            opacity: 1,
            filter: 'brightness(80%)',
            scale: 0.1,
            zIndex: this.zIndexVal,
            x: this.cacheMousePos.x - img.rect.width/2 ,
            y: this.cacheMousePos.y - img.rect.height/2,
            rotation: startAngle
        }, {
            duration: 1,
            ease: 'power2',
            scale: 1,
            filter: 'brightness(100%)',
            x: this.mousePos.x - img.rect.width/2 + (dx*70),
            y: this.mousePos.y - img.rect.height/2 + (dy*70),
            rotation: this.lastAngle
        }, 0)
        .to(img.DOM.el, {
            duration: 0.4,
            ease: 'expo',
            opacity: 0
        }, 0.5)
        .to(img.DOM.el, {
            duration: 1.5,
            ease: 'power4',
            x: "+=" + (dx * 120),
            y: "+=" + (dy * 120),
        }, 0.05)
    }

    onImageActivated = () => {
        this.activeImagesCount++;
        this.isIdle = false;
    }

    onImageDeactivated = () => {
        this.activeImagesCount--;
        if (this.activeImagesCount === 0) {
            this.isIdle = true;
        }
    }
}
