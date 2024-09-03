import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../core/TButton.jsx";

const Survey = () => {
  const { tmpSurveys } = useStateContext();

  const onDeleteClick = () => {};

  return (
    <PageComponent
      title="Survey"
      buttons={
        <TButton color="green" to="/surveys/create">
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create new
        </TButton>
      }
    >
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
