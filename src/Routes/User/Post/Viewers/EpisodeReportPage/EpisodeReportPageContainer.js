import React, { useState, useEffect } from "react";
import EpisodeReportPagePresenter from "./EpisodeReportPagePresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import {
  EPISODE_OF_REPORT,
  FIND_EPISODE_REPORT_CATEGORY
} from "./EpisodeReportPageQuery";
import useInput from "../../../../../Hooks/useInput";

export default ({
  onReport,
  setOnReport,
  episodeId,
  offenderIdBucket,
  reportKind
}) => {
  const [reportCategorySelect, setReportCategorySelect] = useState("");

  const text = useInput("");

  const [uploadEpisodeReportMutation] = useMutation(EPISODE_OF_REPORT);

  const {
    data: findEpisodeReportCategoryData,
    loading: findEpisodeReportCategoryLoading,
    error: findEpisodeReportCategoryError
  } = useQuery(FIND_EPISODE_REPORT_CATEGORY, {
    variables: {
      category: reportKind
    }
  });

  const uploadEpisodeReportMutationFunction = () => {
    uploadEpisodeReportMutation({
      variables: {
        episodeId,
        reportCategory: reportCategorySelect,
        offenderId: offenderIdBucket
      }
    });
  };

  if (!findEpisodeReportCategoryLoading) {
    return (
      <EpisodeReportPagePresenter
        onReport={onReport}
        setOnReport={setOnReport}
        text={text}
        episodeId={episodeId}
        reportCategorySelect={reportCategorySelect}
        uploadEpisodeReportMutation={uploadEpisodeReportMutation}
        findEpisodeReportCategoryData={findEpisodeReportCategoryData}
        reportCategorySelect={reportCategorySelect}
        setReportCategorySelect={setReportCategorySelect}
        uploadEpisodeReportMutationFunction={
          uploadEpisodeReportMutationFunction
        }
      />
    );
  } else {
    return <></>;
  }
};
