import { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

import { palette } from "@styles/palette";

// const timeout = (ms: number) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };
//
// export const getAsyncData = async () => {
//   await timeout(3000);
//   const addData = Array(20)
//     .fill("")
//     .map(() => {
//       const randomwIndex = Math.floor(Math.random() * category.length);
//       return { text: "헬스장 가서 유산소로 웜업 10분 한 후, 근 ...", ...category[randomwIndex] };
//     });
//   return addData;
// };
export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export interface Item {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License;
  allow_forking: boolean;
  is_template: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  score: number;
  labelText: string;
  labelColor: string;
}

export interface IRepository {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}
const fetchRepositories = async (page: number) => {
  return await axios
    .get<IRepository>(
      `https://api.github.com/search/repositories?q=topic:reactjs&per_page=30&page=${page}`
    )
    .then((resp) => resp.data);
};

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const categoryTodo = [
  { labelText: "건강", labelColor: palette.todo.yellow02 },
  { labelText: "관계", labelColor: palette.todo.red02 },
  { labelText: "업무", labelColor: palette.todo.purple01 },
  { labelText: "배움", labelColor: palette.todo.green01 },
  { labelText: "여가", labelColor: palette.todo.blue01 },
];

const dummyData = Array(20)
  .fill("")
  .map(() => {
    const randomwIndex = Math.floor(Math.random() * categoryTodo.length);
    return { text: "헬스장 가서 유산소로 웜업 10분 한 후, 근 ...", ...categoryTodo[randomwIndex] };
  });

const useGetTodos = () => {
  const { ref, inView } = useInView();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, status, hasNextPage, fetchNextPage, isFetching, isLoading } = useInfiniteQuery<
    IRepository,
    Error,
    IRepository,
    [string] | string
  >(
    [`todo-${currentPage}`],
    async ({ pageParam = 1 }) => {
      return await fetchRepositories(pageParam);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = lastPage.total_count / 20;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
      select: (data) => {
        const dummy = data.pages.map((page) => {
          const data = page.items.map((item) => {
            const randomwIndex = Math.floor(Math.random() * categoryTodo.length);

            return { ...item, ...categoryTodo[randomwIndex] };
          });
          return { ...page, items: data };
        });
        console.log(data, data.pageParams, dummy);

        return { ...data, pages: dummy };
      },
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return { ref, data, fetchNextPage, isFetching, isLoading };
};

export default useGetTodos;
