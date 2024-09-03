import React from "react";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import SurveyListItem from "../components/SurveyListItem";

const Survey = () => {
  const { tmpSurveys } = useStateContext();

  const onDeleteClick = () => {};

  return (
    <PageComponent title="Survey">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {tmpSurveys.map((survey) => (
          <SurveyListItem
            survey={survey}
            key={survey.id}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </PageComponent>
  );
};

export default Survey;
