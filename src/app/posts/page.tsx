"use client";
import { PostsPage } from "@/application/gql/graphql";
import { gql, useQuery } from "@apollo/client";
import { ActionIcon, Group, Paper, Text } from "@mantine/core";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { useState } from "react";
import companies from "./data.json";

const Posts = () => {
  const [recordPerpage, setRecordPerpage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "name",
    direction: "asc",
  });

  const query = gql`
    query GET_POSTS($limit: Int) {
      posts(options: { paginate: { limit: $limit } }) {
        data {
          id
          title
          user {
            id
            name
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery<{ posts: PostsPage }>(query, {
    variables: { limit: recordPerpage },
  });

  return (
    <>
      <Paper shadow="xs">
        <DataTable
          columns={[
            { accessor: "title", sortable: true },
            { accessor: "author" },
            {
              accessor: "actions",
              title: <Text mr="xs">Row actions</Text>,
              textAlignment: "right",
              render: (company) => (
                <Group spacing={4} position="right" noWrap>
                  <ActionIcon
                    color="green"
                    onClick={() => alert(JSON.stringify(company))}
                  >
                    <IconEye size={16} />
                  </ActionIcon>
                  <ActionIcon
                    color="blue"
                    onClick={() => alert(JSON.stringify(company))}
                  >
                    <IconEdit size={16} />
                  </ActionIcon>
                  <ActionIcon
                    color="red"
                    onClick={() => alert(JSON.stringify(company))}
                  >
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              ),
            },
          ]}
          records={data?.posts.data?.map((post) => ({
            title: post?.title,
            author: post?.user?.name,
          }))}
          recordsPerPage={recordPerpage}
          recordsPerPageOptions={[10, 50, 100]}
          onRecordsPerPageChange={setRecordPerpage}
          totalRecords={companies.length}
          page={page}
          onPageChange={setPage}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
          //   Loading
          fetching={loading}
          loaderVariant="oval"
          loaderSize="xl"
          loaderBackgroundBlur={2}
        />
      </Paper>
    </>
  );
};

export default Posts;
