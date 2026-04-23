/**
 * Phosphor Icon 매핑 레지스트리
 *
 * normalIcons의 string name → phosphor-react-native 컴포넌트 매핑.
 * defaultWeight: 해당 아이콘의 기본 렌더링 weight.
 *   - 'regular': 라인 아이콘 (caret, plus, minus 등 UI 컨트롤)
 *   - 'fill': 채워진 아이콘 (house, heart, star 등 시각 강조)
 */
import {
  Bell,
  Image,
  Camera,
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretUp,
  Check,
  CheckCircle,
  UserCircle,
  X,
  XCircle,
  Info,
  List,
  Plus,
  Minus,
  Clock,
  Star,
  ShareNetwork,
  MagnifyingGlass,
  SquaresFour,
  Cube,
  Pill,
  ChefHat,
  GlobeHemisphereEast,
  UploadSimple,
  FileText,
  Stack,
  PencilSimpleLine,
  House,
  Heart,
  ShoppingCartSimple,
  CalendarDots,
  ChatDots,
  Warning,
  LockKey,
  CrownSimple,
} from 'phosphor-react-native';
import type { ComponentType } from 'react';
export type IconVariant = 'regular' | 'fill';

export type PhosphorIconName =
  | 'bell'
  | 'image'
  | 'camera'
  | 'caret-down'
  | 'caret-left'
  | 'caret-right'
  | 'caret-up'
  | 'check'
  | 'check-circle'
  | 'user-circle'
  | 'x'
  | 'x-circle'
  | 'info'
  | 'list'
  | 'plus'
  | 'minus'
  | 'clock'
  | 'star'
  | 'share-network'
  | 'magnifying-glass'
  | 'squares-four'
  | 'cube'
  | 'pill'
  | 'chef-hat'
  | 'globe-hemisphere-east'
  | 'upload-simple'
  | 'file-text'
  | 'stack'
  | 'pencil-simple-line'
  | 'house'
  | 'heart'
  | 'shopping-cart-simple'
  | 'calendar-dots'
  | 'chat-dots'
  | 'warning'
  | 'lock-key'
  | 'crown-simple';

export interface PhosphorEntry {
  component: ComponentType<any>;
  defaultWeight: IconVariant;
}

export const phosphorMap: Record<PhosphorIconName, PhosphorEntry> = {
  // ── Regular (라인) ────────────────────────────────
  'bell':                  { component: Bell,                defaultWeight: 'regular' },
  'image':                 { component: Image,               defaultWeight: 'regular' },
  'camera':                { component: Camera,              defaultWeight: 'regular' },
  'caret-down':            { component: CaretDown,           defaultWeight: 'regular' },
  'caret-left':            { component: CaretLeft,           defaultWeight: 'regular' },
  'caret-right':           { component: CaretRight,          defaultWeight: 'regular' },
  'caret-up':              { component: CaretUp,             defaultWeight: 'regular' },
  'check':                 { component: Check,               defaultWeight: 'regular' },
  'user-circle':           { component: UserCircle,          defaultWeight: 'regular' },
  'x':                     { component: X,                   defaultWeight: 'regular' },
  'list':                  { component: List,                defaultWeight: 'regular' },
  'plus':                  { component: Plus,                defaultWeight: 'regular' },
  'minus':                 { component: Minus,               defaultWeight: 'regular' },
  'clock':                 { component: Clock,               defaultWeight: 'regular' },
  'share-network':         { component: ShareNetwork,        defaultWeight: 'regular' },
  'magnifying-glass':      { component: MagnifyingGlass,     defaultWeight: 'regular' },
  'squares-four':          { component: SquaresFour,         defaultWeight: 'regular' },
  'cube':                  { component: Cube,                defaultWeight: 'regular' },
  'pill':                  { component: Pill,                defaultWeight: 'regular' },
  'chef-hat':              { component: ChefHat,             defaultWeight: 'regular' },
  'globe-hemisphere-east': { component: GlobeHemisphereEast, defaultWeight: 'regular' },
  'upload-simple':         { component: UploadSimple,        defaultWeight: 'regular' },

  // ── Regular + Fill 겸용 (사용처에서 variant="fill" 명시) ──
  'info':                  { component: Info,                defaultWeight: 'regular' },
  'star':                  { component: Star,                defaultWeight: 'regular' },

  // ── Fill (채움) ───────────────────────────────────
  'check-circle':          { component: CheckCircle,         defaultWeight: 'fill' },
  'x-circle':              { component: XCircle,             defaultWeight: 'fill' },
  'file-text':             { component: FileText,            defaultWeight: 'fill' },
  'stack':                 { component: Stack,               defaultWeight: 'fill' },
  'pencil-simple-line':    { component: PencilSimpleLine,    defaultWeight: 'fill' },
  'house':                 { component: House,               defaultWeight: 'fill' },
  'heart':                 { component: Heart,               defaultWeight: 'fill' },
  'shopping-cart-simple':  { component: ShoppingCartSimple,  defaultWeight: 'fill' },
  'calendar-dots':         { component: CalendarDots,        defaultWeight: 'fill' },
  'chat-dots':             { component: ChatDots,            defaultWeight: 'fill' },
  'warning':               { component: Warning,             defaultWeight: 'fill' },
  'lock-key':              { component: LockKey,             defaultWeight: 'fill' },
  'crown-simple':          { component: CrownSimple,         defaultWeight: 'fill' },
};
