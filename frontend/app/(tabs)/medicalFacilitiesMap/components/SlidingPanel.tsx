import { forwardRef, useRef, useImperativeHandle } from 'react';
import { View, Animated, PanResponder } from 'react-native';
import { SCREEN_HEIGHT, PANEL_MIN_HEIGHT, PANEL_MAX_HEIGHT } from '../constants';

interface SlidingPanelProps {
  children: React.ReactNode;
}

export type SlidingPanelRef = {
  expand: () => void;
  minimize: () => void;
};

export const SlidingPanel = forwardRef<SlidingPanelRef, SlidingPanelProps>(
  function SlidingPanel({ children }, ref) {
    const panelY = useRef(new Animated.Value(PANEL_MIN_HEIGHT)).current;
    const lastGestureY = useRef(0);

    useImperativeHandle(ref, () => ({
      expand: () => {
        Animated.spring(panelY, {
          toValue: PANEL_MAX_HEIGHT,
          useNativeDriver: false,
          tension: 50,
          friction: 12,
        }).start();
      },
      minimize: () => {
        Animated.spring(panelY, {
          toValue: PANEL_MIN_HEIGHT,
          useNativeDriver: false,
          tension: 50,
          friction: 12,
        }).start();
      },
    }));

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, { dy }) => Math.abs(dy) > 10,
      onPanResponderGrant: () => {
        lastGestureY.current = (panelY as any)._value;
      },
      onPanResponderMove: (_, { dy }) => {
        const newY = Math.max(PANEL_MAX_HEIGHT, Math.min(PANEL_MIN_HEIGHT, lastGestureY.current + dy));
        panelY.setValue(newY);
      },
      onPanResponderRelease: (_, { vy }) => {
        const currentY = (panelY as any)._value;
        const midPoint = (PANEL_MIN_HEIGHT + PANEL_MAX_HEIGHT) / 2;

        if (Math.abs(vy) >= 0.5) {
          // If velocity is high enough, move in direction of velocity
          Animated.spring(panelY, {
            toValue: vy > 0 ? PANEL_MIN_HEIGHT : PANEL_MAX_HEIGHT,
            useNativeDriver: false,
            tension: 50,
            friction: 12,
          }).start();
        } else {
          // If velocity is low, snap to nearest position
          Animated.spring(panelY, {
            toValue: currentY > midPoint ? PANEL_MIN_HEIGHT : PANEL_MAX_HEIGHT,
            useNativeDriver: false,
            tension: 50,
            friction: 12,
          }).start();
        }
      },
    });

    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: Animated.subtract(SCREEN_HEIGHT, panelY),
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          zIndex: 1,
        }}
      >
        <View className="items-center pt-2 pb-4">
          <View className="w-10 h-1 rounded-full bg-gray-300" />
        </View>
        {children}
      </Animated.View>
    );
  }
);