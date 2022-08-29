import { type CanvasHTMLAttributes, useEffect, useRef } from 'react';

type BuiltInCanvasProps = CanvasHTMLAttributes<HTMLCanvasElement>;

type CanvasProps = BuiltInCanvasProps & {
  draw: (ctx: CanvasRenderingContext2D) => void;
};

export default function Canvas(props: CanvasProps) {
  const { draw, ...rest } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d')!;
    let animationFrameId: number;

    const render = () => {
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw]);

  return <canvas ref={canvasRef} {...rest}/>;
}
