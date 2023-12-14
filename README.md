# Custom version string generator

It generate object with custom version strings like

```
{
  buildNumber: 122,
  buildNumberString: '122',
  storeTechVersion: '1.0.0.122',
  gitShort: 'abf331f',
  techVersion: '1.0.0.122-abf331f'
}
```

## Inputs

### `marketing-version`

**Required** The marketing version string that is used as a base of the version, like `1.0.0`

### `run-number-base`

**Optional** Used as a base for run number, this number is used to add up to the actual `run-number`, in case that given run number is lower then already existing one.

**Default** is 0

Example

- `run-number` is 4
- your existing auto incremented number of previous version is 80
- set `run-number-base` to 80 and you will get 84
- it's simply added `run-number-base` + `run-number`

### `build-number-separator`

**Optional** Separator used when build number is added to the `marketing-version`

### `version-postfix`

**Optional** Postfix string added at the end of the `tech-version`

## Outputs

### `build-number`

Results in `run-number-base` + `run-number`

### `git-short`

Results in `github.context.sha` shortened to length of 7

### `store-tech-version`

Results in "`marketing-version``build-number-separator``build-number`"

### `tech-version`

Results in "`store-tech-version`-`git-short``version-postfix`"