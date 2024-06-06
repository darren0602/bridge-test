import {
  Box,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useFormikContext } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import CtaButton from "./components/buttons/cta-button.component";
import FormSubmitButton from "./components/buttons/form-submit-button.component";
import FormFieldText from "./components/forms/form-field-text.component";
import Form from "./components/forms/form.component";
import Quiz from "./components/quiz.component";
import Spacer from "./components/spacer.component";
import DialogModal from "./components/dialog-modal.component";
import Confetti from "react-confetti";
import Footer from "./components/footer.component";
import ScrollToTopButton from "./components/buttons/scroll-to-top-button.component";

const SampleQuestion = [
  { id: 1, question: 17, choices: [10, 20, 17], solution: 20 },
  { id: 2, question: 45, choices: [50, 45, 40], solution: 50 },
  { id: 3, question: 75, choices: [70, 80, 175], solution: 80 },
  { id: 4, question: 19, choices: [20, 10, 19], solution: 20 },
  { id: 5, question: 64, choices: [64, 70, 60], solution: 60 },
  { id: 6, question: 0, choices: [10, 1, 0], solution: 0 },
  { id: 7, question: 98, choices: [80, 100, 89], solution: 100 },
  { id: 8, question: 199, choices: [190, 100, 200], solution: 200 },
  { id: 9, question: 94, choices: [100, 94, 90], solution: 90 },
  { id: 10, question: 165, choices: [160, 170, 150], solution: 170 },
  { id: 11, question: 445, choices: [450, 440, 500], solution: 450 },
  { id: 12, question: 999, choices: [990, 1000, 909], solution: 1000 },
];

const MainContainer = styled(Box)({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
});

const CenteredBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
});

const FlexBox = styled(Box)({
  display: "flex",
});

const FormBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to bottom, ${theme.palette.colors.brand.linear[0]}, ${theme.palette.colors.brand.linear[1]})`,
}));

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
});

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const totalQuestions = SampleQuestion.length;

  const onSubmitForm = (values) => {
    const correctAnswers = SampleQuestion.filter(
      (sample) => parseInt(values[`Q${sample.id}`]) === sample.solution
    ).length;
    setScore(correctAnswers);
    setShowModal(true);
    setShowResult(true);
  };

  const ResetButton = ({ width }) => {
    const { resetForm } = useFormikContext();
    return (
      <CtaButton
        onClickButton={() => {
          resetForm();
          setShowResult(false);
        }}
        width={width}
      >
        <Typography>Reset</Typography>
      </CtaButton>
    );
  };

  const handleClose = () => {
    setScore(0);
    setShowModal(false);
    setShowResult(false);
  };

  return (
    <>
      {score === totalQuestions && showModal && <Confetti />}

      <FormBox>
        <MainContainer>
          <ScrollToTopButton />
          <CenteredBox>
            <Typography fontWeight="bold" variant="h5">
              Rounding Off to Nearest 10
            </Typography>
          </CenteredBox>

          <Form
            initialValues={{
              name: "",
              Q1: "",
              Q2: "",
              Q3: "",
              Q4: "",
              Q5: "",
              Q6: "",
              Q7: "",
              Q8: "",
              Q9: "",
              Q10: "",
              Q11: "",
              Q12: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmitForm}
          >
            <DialogModal
              showModal={showModal}
              setShowModal={setShowModal}
              onConfirm={handleClose}
              title={`Your score is ${score}/${totalQuestions}`}
              buttonText="OK"
            />

            <CenteredBox sx={{ flexDirection: "column" }}>
              <FlexBox>
                <Typography
                  sx={{
                    fontWeight: theme.fonts.fontWeights.bold,
                    marginTop: "10px",
                  }}
                >
                  Name
                </Typography>
                <Spacer position="right" size="s" />
                <FormFieldText name="name" placeholder="Enter your name" />
                {!isMobile && (
                  <>
                    {!showResult && (
                      <>
                        <Spacer position="right" size="xl" />
                        <FormSubmitButton width="100px">
                          <Typography>Submit</Typography>
                        </FormSubmitButton>
                      </>
                    )}
                    <Spacer position="right" size="xl" />
                    <ResetButton width="100px" />
                  </>
                )}
              </FlexBox>

              {isMobile && (
                <>
                  <Spacer position="top" size="l" />
                  <FlexBox>
                    {!showResult && (
                      <FormSubmitButton width="100px">
                        <Typography>Submit</Typography>
                      </FormSubmitButton>
                    )}
                    <Spacer position="right" size="xl" />
                    <ResetButton width="100px" />
                  </FlexBox>
                </>
              )}
            </CenteredBox>

            <Grid
              container
              sx={{ paddingX: isMobile ? "25px" : "100px" }}
              rowGap={2}
            >
              {SampleQuestion.map((sample) => (
                <Grid key={sample.id} item xs={isMobile ? 12 : 6}>
                  <Quiz
                    name={`Q${sample.id}`}
                    question={sample.question}
                    choices={sample.choices}
                    solution={sample.solution}
                    showResult={showResult}
                  />
                </Grid>
              ))}
            </Grid>
          </Form>

          <CenteredBox>
            <Footer />
          </CenteredBox>
        </MainContainer>
      </FormBox>
    </>
  );
}

export default App;
