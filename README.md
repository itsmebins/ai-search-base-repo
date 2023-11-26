

<!-- ABOUT THE PROJECT -->
## About The Project


Simple github AI project search repo


### Built With
The project is built with lots of cool tecnologies. All of them are open-source.

* [create-t3-app](https://create.t3.gg/) - very cool stack for Next.js
* [Meilisearch](https://github.com/meilisearch/meilisearch) - search backend
* [Prefect](https://github.com/PrefectHQ/prefect) - data orchestration
* [PostgreSQL](https://github.com/postgres/postgres)


### Prerequisites

You will need three main things to get started:
- npm
- GitHub API key
- Meilisearch instance with uploaded repositories names (optional)


### Installation

1. Get a GitHub API key
2. Clone the repo
   ```sh
   git clone https://github.com/itsmebins/ai-search-base-repo.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Set your GitHub API key in `.env`
   ```js
   GITHUB_ACCESS_TOKEN_2="YOUR API KEY"
   ```
5. Set your Meilisearch credentials in `.env` (optional)
   ```js
   NEXT_PUBLIC_MEILI_URL="YOUR MEILI INSTANCE URL"
   NEXT_PUBLIC_MEILI_SEARCH_KEY="YOUR MEILI PUBLIC KEY"
   ```



<!-- LICENSE -->
## License

Distributed under the Apache License 2.0. See `LICENSE.txt` for more information.


