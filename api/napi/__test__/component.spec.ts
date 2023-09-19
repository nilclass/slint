// Copyright © SixtyFPS GmbH <info@slint.dev>
// SPDX-License-Identifier: GPL-3.0-only OR LicenseRef-Slint-Royalty-free-1.1 OR LicenseRef-Slint-commercial

import test from 'ava'

import { Window } from '../index'

test('Window', (t) => {
    t.throws(() => {
       new Window()
      },
        {
          code: "GenericFailure",
          message: "Window can only be created by using a Component."
        }
      );
})