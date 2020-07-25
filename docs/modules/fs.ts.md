---
title: fs.ts
nav_order: 1
parent: Modules
---

## fs overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [copy](#copy)
  - [exists](#exists)
  - [move](#move)
  - [readFile](#readfile)
  - [remove](#remove)
  - [writeFile](#writefile)

---

# utils

## copy

Copy a file or directory. The directory can have contents. Will overwrite existing file or directory.

**Signature**

```ts
export declare const copy: (src: string, dest: string) => TE.TaskEither<Error, void>
```

Added in v0.0.1

## exists

Test whether or not the given path exists by checking with the file system.

**Signature**

```ts
export declare const exists: (path: string) => TE.TaskEither<Error, boolean>
```

Added in v0.0.1

## move

Moves a file or directory, even across devices. By default it won't overwrite existing file or directory.

**Signature**

```ts
export declare const move: (src: string, dest: string, options: fs.MoveOptions) => TE.TaskEither<Error, void>
```

Added in v0.0.1

## readFile

Reads a file.

**Signature**

```ts
export declare const readFile: (path: string, encoding: string) => TE.TaskEither<Error, string>
```

Added in v0.0.1

## remove

Removes a file or directory. The directory can have contents. If the path does not exist, silently does nothing.

**Signature**

```ts
export declare const remove: (path: string) => TE.TaskEither<Error, void>
```

Added in v0.0.1

## writeFile

Almost the same as `writeFile` (i.e. it overwrites), except that if the parent directory does not exist, it's created.

**Signature**

```ts
export declare const writeFile: (path: string, data: string, options: fs.WriteFileOptions) => TE.TaskEither<Error, void>
```

Added in v0.0.1
