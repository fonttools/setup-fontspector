# Setup Fontspector

[![GitHub Super-Linter](https://github.com/fonttools/setup-fontspector/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/fonttools/setup-fontspector/actions/workflows/ci.yml/badge.svg)

Use this template to install Fontspector in your Github Actions Workflow:

```yaml
- name: Install fontspector
  uses: fonttools/setup-fontspector@main
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

By default, this installs the latest released version as a binary. You may also
choose a specific release:

```yaml
- name: Install fontspector
  uses: fonttools/setup-fontspector@main
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  with:
    version: 1.0.1
```

or you can get a recent binary build artefact by requesting a "head" version:

```yaml
# Needed for source build
- uses: actions-rust-lang/setup-rust-toolchain@v1
- uses: arduino/setup-protoc@v3
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}

- name: Install fontspector
  uses: fonttools/setup-fontspector@main
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  with:
    version: 1.0.1
```

or you can build from source by requesting any non-default features you would
like to build (as a space separated list)

```yaml
# Needed for source build
- uses: actions-rust-lang/setup-rust-toolchain@v1
- uses: arduino/setup-protoc@v3
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}

- name: Install fontspector
  uses: fonttools/setup-fontspector@main
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  with:
    version: latest
    features: python duckdb
```
