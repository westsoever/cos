import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';

afterEach(cleanup);

describe('Pico app interactions', () => {
  it('takes a catalog coffee from Discover through rating and saving to the Journal', async () => {
    const user = userEvent.setup();
    window.location.hash = '#/discover';

    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: 'Discover' })).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', {
        name: /Yirgacheffe Kochere.*Onyx Coffee Lab.*Ethiopia/i,
      }),
    );

    expect(
      await screen.findByRole('heading', { level: 2, name: 'Yirgacheffe Kochere' }),
    ).toBeInTheDocument();
    expect(window.location.hash).toBe('#/coffee/eth-yirg-001?from=discover');

    const ratingForm = screen.getByRole('heading', { name: 'Rate this coffee' }).closest('section');
    expect(ratingForm).not.toBeNull();
    const form = within(ratingForm as HTMLElement);
    const saveButton = form.getByRole('button', { name: 'Save to journal' });
    expect(saveButton).toBeDisabled();

    await user.click(form.getByRole('radio', { name: '4 out of 5 stars' }));
    await user.type(
      form.getByRole('textbox', { name: /Tasting note/i }),
      'Jasmine and lemon, with a clean finish.',
    );
    await user.click(saveButton);

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Journal' }),
    ).toBeInTheDocument();
    expect(window.location.hash).toBe('#/journal');
    expect(screen.getByRole('status')).toHaveTextContent('Saved to your coffee journal.');
    expect(screen.getByRole('heading', { level: 3, name: 'Yirgacheffe Kochere' })).toBeInTheDocument();
    expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument();

    const stored = JSON.parse(window.localStorage.getItem('pico-user-data') ?? '{}');
    expect(stored.ratings).toEqual([
      expect.objectContaining({
        coffeeId: 'eth-yirg-001',
        stars: 4,
        note: 'Jasmine and lemon, with a clean finish.',
      }),
    ]);

    const search = screen.getByRole('searchbox', { name: 'Search journal' });
    await user.type(search, 'does not exist');
    expect(screen.getByRole('heading', { name: 'No journal entries match' })).toBeInTheDocument();
    expect(screen.getByText('Showing 0 of 1 entry')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(search).toHaveValue('');
    expect(screen.getByRole('heading', { level: 3, name: 'Yirgacheffe Kochere' })).toBeInTheDocument();
  });

  it('honors direct hashes and reacts to browser hash navigation', async () => {
    const user = userEvent.setup();
    window.location.hash = '#/journal';

    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: 'Journal' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Discover' }));
    await waitFor(() => expect(window.location.hash).toBe('#/discover'));
    expect(screen.getByRole('heading', { level: 1, name: 'Discover' })).toBeInTheDocument();

    window.location.hash = '#/taste';
    fireEvent(window, new HashChangeEvent('hashchange'));
    expect(await screen.findByRole('heading', { level: 1, name: 'Taste' })).toBeInTheDocument();

    window.location.hash = '#/coffee/eth-yirg-001?from=journal';
    fireEvent(window, new HashChangeEvent('hashchange'));
    expect(
      await screen.findByRole('heading', { level: 2, name: 'Yirgacheffe Kochere' }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '← Back' }));
    expect(await screen.findByRole('heading', { level: 1, name: 'Journal' })).toBeInTheDocument();
    expect(window.location.hash).toBe('#/journal');
  });
});
