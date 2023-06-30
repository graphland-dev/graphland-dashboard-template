"use client";
import React, { useState } from "react";
import companies from "./data.json";
import { DataTable } from "mantine-datatable";
import { Paper } from "@mantine/core";

const Posts = () => {
  const [recordPerpage, setRecordPerpage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <Paper shadow="xs">
        <DataTable
          columns={[
            { accessor: "name" },
            { accessor: "streetAddress" },
            { accessor: "city" },
            { accessor: "state" },
          ]}
          records={companies}
          recordsPerPage={recordPerpage}
          recordsPerPageOptions={[10, 50, 100]}
          onRecordsPerPageChange={setRecordPerpage}
          totalRecords={companies.length}
          page={page}
          onPageChange={setPage}
        />
      </Paper>
    </>
  );
};

export default Posts;
