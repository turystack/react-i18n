import { describe, expect, it } from 'vitest'

import { uiLabels } from './index.js'

/** The codes `@turystack/nestjs-file-transfer` and `rowFromSchema` write. */
const KNOWN = [
  'required',
  'invalid',
  'invalid_type',
  'invalid_value',
  'invalid_format',
  'invalid_email',
  'invalid_url',
  'invalid_uuid',
  'too_small',
  'too_big',
  'column_count_mismatch',
  'invalid_encoding',
  'invalid_json',
  'invalid_row',
  'row_too_large',
  'invalid_date',
  'invalid_datetime',
  'not_multiple_of',
  'invalid_union',
]

const LOCALES = Object.entries(uiLabels)

describe('transfer.rowError', () => {
  it.each(LOCALES)('%s words every code the worker writes', (_, labels) => {
    for (const code of KNOWN) {
      expect(labels.transfer.rowError(code)).not.toContain(code)
    }
  })

  it.each(LOCALES)(
    '%s still reads an unknown code, code included',
    (_, labels) => {
      expect(labels.transfer.rowError('booking_code_taken')).toContain(
        '(booking_code_taken)',
      )
    },
  )

  it.each(LOCALES)(
    '%s reads a prototype key as unknown, not as a function',
    (_, labels) => {
      expect(labels.transfer.rowError('constructor')).toContain('(constructor)')
    },
  )
})

describe('transfer.fileDetails', () => {
  it('names a tab in words and leaves the delimiter out of JSON', () => {
    expect(uiLabels.en.transfer.fileDetails('utf-8', '\t')).toBe(
      'UTF-8 · separated by tab',
    )
    expect(uiLabels['pt-br'].transfer.fileDetails('windows-1252', ';')).toBe(
      'WINDOWS-1252 · separado por ;',
    )
    expect(uiLabels.es.transfer.fileDetails('utf-8', null)).toBe('UTF-8')
  })
})

describe('transfer.jobCounts', () => {
  it('leaves the failed count out while nothing failed', () => {
    expect(
      uiLabels.en.transfer.jobCounts({
        failed: 0,
        processed: 4,
        total: 4,
      }),
    ).toBe('4 of 4 rows processed')
  })
})
