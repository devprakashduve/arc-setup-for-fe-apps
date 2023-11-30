// FileInput/interface.tsx

import React from 'react'

export interface FileInputProps {
  onChange: (files: FileList | null) => void
}
