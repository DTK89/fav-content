import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form } from 'formik';

const StyledBarWrapper = styled.div`
  height: 100vh;
  width: 480px;
  position: fixed;
  top: 0;
  right: 0;
  /* display: flex; */
  padding: 90px 50px;
  /* flex-direction: column; */
  z-index: 100;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  border-left: 8px solid ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.5s ease-in-out;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInputArea = styled(Input)`
  margin: 30px 0 20px;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const NewItemBar = ({ pageTypeContext, isVisible, addItem, handleClose }) => (
  <StyledBarWrapper isVisible={isVisible} activeColor={pageTypeContext}>
    <Heading>Add new note</Heading>
    <Paragraph>A note requires title and description</Paragraph>
    <Formik
      initialValues={{ title: '', description: '', articleUrl: '', twitterName: '', created: '' }}
      onSubmit={(values) => {
        addItem(pageTypeContext, values);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledInputArea
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            placeholder="title"
          />
          {pageTypeContext === 'articles' && (
            <Input
              type="text"
              name="articleUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
              placeholder="Article Link"
            />
          )}
          {pageTypeContext === 'twitters' && (
            <Input
              type="text"
              name="twitterName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
              placeholder="Twitter Name eg. hello_roman"
            />
          )}
          <StyledTextArea
            as="textarea"
            // type="textarea"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
            placeholder="Description"
          />
          <Button type="submit" activecolor={pageTypeContext}>
            ADD NOTE
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledBarWrapper>
);

NewItemBar.propTypes = {
  pageTypeContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
};

NewItemBar.defaultProps = {
  pageTypeContext: 'notes',
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
