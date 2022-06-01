import reducer from "../Components/Reducer";
const initialState = {
  Data: {},
  Error_Message: '',
  Loading:false
};

  it('Testing Original_Data Case', () => {
    const NewData = {"objectID":321388,"isHighlight":false};
    const result = reducer(initialState, {type: 'Details', data: NewData});
    expect(result.Data.isHighlight).toEqual(false);
  });

  it('Testing Error Case', () => {
    const message="Error In Fetching Data"
    const result = reducer(initialState, {type: 'Error', Error: message});
    expect(result.Error_Message).toStrictEqual(message);
  });
  
  it('Testing Loading Case', () => {
    const result = reducer(initialState, {type: 'Loader', data: true});
    expect(result.Loading).toStrictEqual(true);
  });

