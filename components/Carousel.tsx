import '@glidejs/glide/dist/css/glide.core.css';
import '@glidejs/glide/dist/css/glide.theme.css';

import React, {
    forwardRef, PropsWithChildren, ReactNode, useEffect, useImperativeHandle, useMemo, useRef
} from 'react';

import Glide from '@glidejs/glide';

import type GlideType from "@glidejs/glide";

interface CarouselProps {
  children: ReactNode;
  options: GlideType.Options;
}

export const Carousel = forwardRef<unknown, CarouselProps>(
  ({ options, children }, ref) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => sliderRef.current);

    useEffect(() => {
      if (sliderRef.current === null) return;

      const slider = new Glide(".glide", options);

      slider.mount();
    }, [options]);

    const bullets = useMemo(
      () =>
        Array.from(Array(React.Children.count(children))).map((count, idx) => (
          <button
            key={`bullet-${idx}`}
            className="glide__bullet"
            data-glide-dir={`=${idx}`}
            aria-label={`Show carousel image ${idx + 1}`}
          ></button>
        )),
      [children]
    );

    return (
      <div className="glide" ref={sliderRef}>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">{children}</div>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {bullets}
        </div>
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

export const Slide = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div className="glide__slide" ref={ref}>
        {children}
      </div>
    );
  }
);

Slide.displayName = "Slide";
