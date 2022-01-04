---
title: Segments
slug: segments
next: forms
---

# Segments

Keila enables you to build subsets of your contact list. These subsets are called
*Segments*.

You can either use the visual editor to combine conditions, or use
the query editor to create more complex segments.

<docs-image src="docs/segment.png" alt="Screenshot of editing a contact segment in Keila"></docs-image>

## Keila Query Language
The Keila Query Language is inspired by MongoDB’s Query Documents and is fully
valid JSON.

The following operators are supported:

### match
The simplest operator is the match operator. It matches either exact values or
exact elements in an array.

#### Examples

Match an exact value:

```json
{"email": "joe@example.com"}
```

```json
{"data.age": 30}
```

Match an array that contains an exact value:
```json
{"data.tags": "rocket-scientist"}
```


### $and
The `$and` operator allows the combination of multiple conditions with a logical `AND`.
This means that all conditions need to be true in order to have a match.

#### Example

Match contacts that have both the `rocket-scientist` and `book-enthusiast` tag.
Contacts that have only one of the two are not matched.

```json
{
  "$and": [
    {"data.tags": "rocket-scientist"},
    {"data.tags": "book-enthusiast"}
  ]
}
```

### $or
The `$or` operator allows the combination of multiple conditions with a logical `OR`.
This means that at least one condition needs to be true in order to have a match.

#### Example

Match contacts that have at least one of the `rocket-scientist` and `book-enthusiast` tags.
Contacts that have both tags are also matched.

```json
{
  "$or": [
    {"data.tags": "rocket-scientist"},
    {"data.tags": "book-enthusiast"}
  ]
}
```

### $not
The `$not` operator allows the negation of a conditoin.

**Example**

Match contacts that *don’t* have the `rocket-scientist` tag.
```json
{
  "$not": {"data.tags": "rocket-scientist"}
}
```

### $like
The `$like` operator is similar to the match operator but allows the use of `%` as
a wildcard.

#### Examples

Match all contacts with an email address that ends in `@keila.io`:

```json
{"email": {"$like": "%@keila.io"}}
```

Match all contacts with a first name that contains the letter `a`:

```json
{"first_name": {"$like": "%a%"}}
```

### $lt, $lte, $gt, $gte

`$lt` (lesser than), `$lte` (lesser than or equal to), `$gt` (greater than), and
`$gte` (greater than or equal to) are relative comparison operators.

#### Example

Match all contacts that were added before January 1 2022:

```json
{"inserted_at":{"$lt":"2022-01-01T00:00:00Z"}}
```