import * as fs from '../../src/fs'

// $ExpectType TaskEither<Error, string>
fs.readFile('path', 'utf8')
