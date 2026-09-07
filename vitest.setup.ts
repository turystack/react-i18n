import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

/**
 * Auto-cleanup only registers itself when vitest runs with `globals: true`.
 * These tests import `describe`/`it` explicitly, so the unmount has to be
 * asked for — without it every render stacks in the same document and the
 * second `getByRole('button')` finds two.
 */
afterEach(cleanup)
