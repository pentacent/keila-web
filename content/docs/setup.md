---
title: Setup
slug: setup
---

# First Steps

Keila doesn’t yet automatically set up your database on first run. This is a
feature that will be added in a future version.

To set up your database, you need to run a command in the interactive Elixir
shell (`IEx`).

If you are running Keila with our Docker image, you can access it like this:

```bash
docker exec -it $CONTAINER_ID bin/keila remote
```

Next, set up the database by executing the following lines in IEx:

```elixir
Ecto.Migrator.with_repo(Keila.Repo, &Ecto.Migrator.run(&1, :up, all: true))
Code.eval_file("priv/repo/seeds.exs")
```