/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/credentials` | `/(auth)/email-login` | `/(auth)/email-signup` | `/(auth)/log-in` | `/(auth)/reset-password` | `/(logs)` | `/(logs)/catch-details` | `/(logs)/edit-catches` | `/(logs)/edit-location` | `/(logs)/navigate-location` | `/(logs)/recent-track` | `/(settings)` | `/(settings)/about` | `/(settings)/change-password` | `/(settings)/edit-profile` | `/(settings)/faq` | `/(settings)/user-settings` | `/(tabs)` | `/(tabs)/home` | `/(tabs)/profile` | `/(tabs)/sst-map` | `/(tabs)/tracker` | `/..\components\Skeleton` | `/_sitemap` | `/about` | `/catch-details` | `/change-password` | `/credentials` | `/edit-catches` | `/edit-location` | `/edit-profile` | `/email-login` | `/email-signup` | `/faq` | `/home` | `/log-in` | `/navigate-location` | `/profile` | `/recent-track` | `/reset-password` | `/splash-screen` | `/sst-map` | `/tracker` | `/user-settings`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
