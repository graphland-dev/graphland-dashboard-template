"use client";
import React, { useEffect, useState } from "react";
import sortBy from "lodash/sortBy";
import companies from "./data.json";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { ActionIcon, Group, Paper, Text } from "@mantine/core";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";

const Posts = () => {
  const [recordPerpage, setRecordPerpage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "name",
    direction: "asc",
  });

  const [records, setRecords] = useState(sortBy(companies, "name"));

  useEffect(() => {
    const data = sortBy(companies, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);

  return (
    <>
      <Paper shadow="xs">
        <DataTable
          columns={[
            { accessor: "name", sortable: true },
            { accessor: "streetAddress", sortable: true },
            { accessor: "city", sortable: true },
            { accessor: "state", sortable: true },
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
          records={records}
          recordsPerPage={recordPerpage}
          recordsPerPageOptions={[10, 50, 100]}
          onRecordsPerPageChange={setRecordPerpage}
          totalRecords={companies.length}
          page={page}
          onPageChange={setPage}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
        />
      </Paper>
    </>
  );
};

export default Posts;
