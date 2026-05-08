import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

(globalThis as any).__DEV__ = true;

// phosphor-react-native는 RN 환경 의존성이 강해 jsdom + vite 변환 파이프라인에서
// 파싱 오류가 발생함. 사용 중인 named export를 더미 컴포넌트로 모킹하여 단위 테스트 안정화.
// (시각 테스트는 Storybook + Chromatic이 담당)
vi.mock('phosphor-react-native', () => {
  const NoopIcon = () => null;
  const names = [
    'Bell', 'Image', 'Camera', 'CaretDown', 'CaretLeft', 'CaretRight', 'CaretUp',
    'Check', 'CheckCircle', 'UserCircle', 'X', 'XCircle', 'Info', 'List',
    'Plus', 'Minus', 'Clock', 'Star', 'ShareNetwork', 'MagnifyingGlass',
    'SquaresFour', 'Cube', 'Pill', 'ChefHat', 'GlobeHemisphereEast', 'UploadSimple',
    'FileText', 'Stack', 'PencilSimpleLine', 'House', 'Heart', 'ShoppingCartSimple',
    'CalendarDots', 'ChatDots', 'Warning', 'LockKey', 'CrownSimple',
  ] as const;
  const exports: Record<string, unknown> = { default: NoopIcon };
  for (const n of names) exports[n] = NoopIcon;
  return exports;
});
