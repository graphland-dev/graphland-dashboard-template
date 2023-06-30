"use client";
import React, { useEffect, useState } from "react";
import sortBy from "lodash/sortBy";
import companies from "./data.json";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { ActionIcon, Group, Paper, Text } from "@mantine/core";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { useQuery, gql } from "@apollo/client";
import { Post, PostsPage } from "@/application/gql/graphql";

const Posts = () => {
  const [recordPerpage, setRecordPerpage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "name",
    direction: "asc",
  });

  const query = gql`
    {
      posts(options: { paginate: { limit: 10 } }) {
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

  const { data, loading } = useQuery<{ posts: PostsPage }>(query);

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
