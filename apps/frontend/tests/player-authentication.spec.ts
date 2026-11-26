import userEvent from '@testing-library/user-event';
import {
  type RenderResult,
  render,
  screen,
  within,
} from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import { createWebHistory } from 'vue-router';
import { App } from '@/app/components';
import { createAppRouter } from '@/app/router';
import { createAppPlugin } from '../src/app/bootstrap/bootstrap-app-plugin';

async function navigateToSignInPage() {
  const mainNavigation = screen.getByRole('navigation', {
    name: /Main navigation/i,
  });
  const signInNavigationLink = within(mainNavigation).getByRole('link', {
    name: /Sign in/i,
  });
  await userEvent.click(signInNavigationLink);
}

async function openApp() {
  const router = createAppRouter(createWebHistory());
  const plugin = createAppPlugin({
    router,
  });
  const app = render(App, {
    global: {
      plugins: [plugin],
    },
  });
  await router.push('/');
  await router.isReady();
  return app;
}

describe('Player authentication', () => {
  let app: RenderResult;
  beforeEach(async () => {
    app = await openApp();
  });
  afterEach(() => {
    app.unmount();
  });

  it('shows login page when sign-in navigation link is clicked', async () => {
    await navigateToSignInPage();

    expect(window.location.pathname).toBe('/sign-in');
  });

  it('shows google sign in button on sign in page if user is signed out', async () => {
    await navigateToSignInPage();

    expect(
      screen.getByRole('button', {
        name: /Sign in with Google/i,
      }),
    ).toBeInstanceOf(HTMLElement);
  });
});
