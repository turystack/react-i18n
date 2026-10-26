import { describe, expect, it } from 'vitest'

import { uiLabels } from './index.js'

/**
 * The params `@turystack/query-dsl` attaches to each issue that carries any.
 * A leaf receives the issue's `params` as they are, so these are the values a
 * real refusal would hand it.
 */
const PARAMS = {
  boolean_too_long: {
    max: 16,
  },
  date_range_too_long: {
    max: 100,
  },
  ids_too_long: {
    max: 7402,
  },
  ids_too_many: {
    max: 100,
  },
  list_invalid_value: {
    allowed: ['paid', 'pending'],
  },
  list_too_long: {
    max: 52,
  },
  money_range_too_long: {
    max: 64,
  },
  pagination_cursor_too_long: {
    max: 4096,
  },
  // No params: the leaf is a plain sentence.
  pagination_integer_invalid: {},
  pagination_integer_too_long: {
    max: 32,
  },
  range_too_long: {
    max: 100,
  },
  search_invalid_field: {
    allowed: ['email'],
  },
  search_mode_not_allowed: {
    allowed: ['contains'],
  },
  search_too_long: {
    max: 100,
  },
  sort_invalid_field: {
    allowed: ['created_at'],
  },
  sort_too_long: {
    max: 64,
  },
  sort_too_many_fields: {
    max: 3,
  },
  tags_invalid_value: {
    allowed: ['vip'],
    max_length: 64,
  },
  tags_too_long: {
    max: 2608,
  },
  tags_too_many: {
    max: 20,
  },
  timezone_too_long: {
    max: 64,
  },
} as const

/** The shape every query-dsl code keeps on the wire. */
const SNAKE_CASE = /^[a-z][a-z0-9_]*$/

describe('SNAKE_CASE', () => {
  it('rejects a camelCase code (negative control)', () => {
    expect(SNAKE_CASE.test('tagsInvalidValue')).toBe(false)
    expect(SNAKE_CASE.test('tags_invalid_value')).toBe(true)
  })

  it('rejects a camelCase params key (negative control)', () => {
    expect(SNAKE_CASE.test('maxLength')).toBe(false)
    expect(SNAKE_CASE.test('max_length')).toBe(true)
  })
})

describe('PARAMS', () => {
  it('names every param in snake_case, as query-dsl writes it', () => {
    expect(
      Object.values(PARAMS)
        .flatMap((params) => Object.keys(params))
        .filter((key) => !SNAKE_CASE.test(key)),
    ).toEqual([])
  })
})

describe.each(Object.entries(uiLabels))('queryDsl in %s', (_locale, labels) => {
  it('has a sentence for every code, and a sentence that names its params', () => {
    for (const [code, leaf] of Object.entries(labels.queryDsl)) {
      const params = PARAMS[code as keyof typeof PARAMS]
      const text =
        typeof leaf === 'function'
          ? (leaf as (value: unknown) => string)(params)
          : leaf

      expect(text.trim(), code).not.toBe('')

      for (const value of Object.values(params ?? {})) {
        // A tag set named in full makes the length limit redundant.
        if (code === 'tags_invalid_value' && typeof value === 'number') {
          continue
        }

        const shown = Array.isArray(value) ? value.join(', ') : String(value)

        expect(text, code).toContain(shown)
      }
    }
  })

  it('keys every leaf by a snake_case code, as query-dsl writes it', () => {
    expect(
      Object.keys(labels.queryDsl).filter((code) => !SNAKE_CASE.test(code)),
    ).toEqual([])
  })

  it('has a leaf for every code PARAMS names', () => {
    expect(Object.keys(labels.queryDsl)).toEqual(
      expect.arrayContaining(Object.keys(PARAMS)),
    )
  })

  it('names the length limit when any tag is accepted', () => {
    expect(
      labels.queryDsl.tags_invalid_value({
        max_length: 64,
      }),
    ).toContain('64')
  })
})
