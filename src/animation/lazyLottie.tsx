import { type LottieProps } from 'react-lottie';
import { lazy, Suspense } from 'react';

const LazyLottieComponent = lazy(() => import('react-lottie'));

interface LottieProps<T extends Record<string, unknown>> {
  getAnimationData: () => Promise<T>;
  id: string;
}

export function LazyLottie<T extends Record<string, unknown>>({
  getAnimationData,
  id,
  ref,
  ...props
}: LottieProps<T> & Omit<LottieComponentProps, 'animationData'>) {
  const { data } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      void import('react-lottie'); // Trigger the library lazy load even if the animationData is not ready
      return getAnimationData();
    },
    enabled: typeof window !== 'undefined',
  });

  if (!data) return <Skeleton height={props.height} width={props.width} />;

  return (
    <Suspense fallback={<Skeleton height={props.height} width={props.width} />}>
      <LazyLottieComponent animationData={data} {...props} />
    </Suspense>
  );
}
