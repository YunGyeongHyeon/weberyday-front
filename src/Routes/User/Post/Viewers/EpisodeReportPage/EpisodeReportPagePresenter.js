import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const Container = styled.div`
  background: white;
  width: 60%;
  height: 400px;
`;

const ReportReasonBox = styled.div`
  margin: 30px;
`;

const OneReport = styled.div`
  display: flex;
  margin: 10px 0;
`;

const ReportCheck = styled.input.attrs({ type: "radio" })``;

const ReportReason = styled.p``;

const ReportContentBox = styled.div`
  margin: 30px;
`;

const ReporterBox = styled.div``;

const ReportCommentBox = styled.div``;

const Reporter = styled.p``;

const ReporterName = styled.p``;

const ReportComment = styled.p`
  margin-bottom: 10px;
`;

const Comment = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
`;

const ButtonBox = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
`;

const CheckButton = styled.button`
  margin: 10px;
  width: 10vw;
  height: 30px;
  border: none;
  color: white;
  background: lightgrey;
  border-radius: 3px;
`;

export default ({
  onReport,
  setOnReport,
  reportCategorySelect,
  findEpisodeReportCategoryData,
  setReportCategorySelect,
  uploadEpisodeReportMutationFunction
}) => {
  return (
    <Container>
      <ReportReasonBox>
        {findEpisodeReportCategoryData.findEpisodeReportCategory.map(
          (value, index) => {
            return (
              <OneReport key={index}>
                <ReportCheck
                  name="check"
                  onChange={() => {
                    setReportCategorySelect(value.id);
                  }}
                />
                <ReportReason>{value.reason}</ReportReason>
              </OneReport>
            );
          }
        )}
      </ReportReasonBox>
      <ButtonBox>
        {reportCategorySelect === "" ? (
          <CheckButton disabled style={{ background: "lightGrey" }}>
            신고
          </CheckButton>
        ) : (
          <CheckButton
            onClick={() => {
              uploadEpisodeReportMutationFunction();
              toast.success("✅신고 접수가 완료되었습니다.");
              setOnReport("off");
            }}
            style={{ background: "#E74B3B" }}
          >
            신고
          </CheckButton>
        )}

        <CheckButton
          onClick={() => {
            setOnReport("off");
          }}
        >
          취소
        </CheckButton>
      </ButtonBox>
    </Container>
  );
};
