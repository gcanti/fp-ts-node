/**
 * @since 0.0.1
 */
import * as fs from 'fs-extra'
import * as TE from 'fp-ts/lib/TaskEither'

/**
 * Reads a file.
 *
 * @since 0.0.1
 */
export const readFile: (path: string, encoding: string) => TE.TaskEither<Error, string> = TE.taskify<
  string,
  string,
  Error,
  string
>(fs.readFile)

/**
 * Almost the same as `writeFile` (i.e. it overwrites), except that if the parent directory does not exist, it's created.
 *
 * @since 0.0.1
 */
export const writeFile: (
  path: string,
  data: string,
  options: {
    readonly encoding?: string | null
    readonly flag?: string
    readonly mode?: number
  }
) => TE.TaskEither<Error, void> = TE.taskify<string, string, fs.WriteFileOptions, Error, void>(fs.outputFile)

/**
 * Copy a file or directory. The directory can have contents. Will overwrite existing file or directory.
 *
 * @since 0.0.1
 */
export const copy: (src: string, dest: string) => TE.TaskEither<Error, void> = TE.taskify<string, string, Error, void>(
  fs.copy
)

/**
 * Removes a file or directory. The directory can have contents. If the path does not exist, silently does nothing.
 *
 * @since 0.0.1
 */
export const remove: (path: string) => TE.TaskEither<Error, void> = TE.taskify<string, Error, void>(fs.remove)

/**
 * Test whether or not the given path exists by checking with the file system.
 *
 * @since 0.0.1
 */
export const exists: (path: string) => TE.TaskEither<Error, boolean> = TE.taskify<string, Error, boolean>(fs.pathExists)

/**
 * Moves a file or directory, even across devices. By default it won't overwrite existing file or directory.
 *
 * @since 0.0.1
 */
export const move: (src: string, dest: string, options: fs.MoveOptions) => TE.TaskEither<Error, void> = TE.taskify<
  string,
  string,
  fs.MoveOptions,
  Error,
  void
>(fs.move)
