import React, { useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { t } from "i18next";

function DataTable(props) {
  const {
    tableData,
    tableColumns,
    param,
    defaultSort,
    bordered = false,
    tableLoader = false,
    options = "",
    headerWrapperClasses = "bg-95",
  } = props;

  useEffect(() => {
    const element = document.getElementsByClassName("datatable-wrap")?.[0];
    element.classList.remove("react-bootstrap-table");
  }, [tableData]);

  const indicationLoading = () => "Loading";

  const indicationNoRecords = () => {
    return <div className="text-center">{t("text.common.noRecordFound")}</div>;
  };

  return (
    <div className="table-responsive">
      <BootstrapTable
        classes="table bg-transparent mb-0"
        keyField="id"
        data={tableData}
        options={options}
        columns={tableColumns}
        defaultSorted={param?.sortType ? defaultSort : []}
        bordered={bordered}
        wrapperClasses="datatable-wrap mb-3"
        loading={tableLoader}
        headerWrapperClasses={headerWrapperClasses}
        noDataIndication={
          tableLoader ? indicationLoading : indicationNoRecords()
        }
      />
    </div>
  );
}

export default DataTable;
