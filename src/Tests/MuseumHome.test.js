import React from 'react'
import TestRenderer,{act} from 'react-test-renderer';
import MuseumHome from '../Components/MuseumHome'
import MuseumService from '../Service/MuseumService'
jest.useFakeTimers();
jest.mock('../Service/MuseumService')
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => (
{ useNavigation: () => ({ navigate: mockNavigate }) }));


const Dummy_Data_Set1 ={"total":994,"objectIDs":[321577,321580,321593]}
const Dummy_Data_Set2 ={"objectID":10}

it('When Data Fetches Correctly', async () => {
  MuseumService.mockReturnValue(Dummy_Data_Set1);
  var tree;
  await act(async () => {
   tree = TestRenderer.create(<MuseumHome />);
  });
  const instance = tree.root;
 expect(instance.findByProps({testID: 'List'})).toBeTruthy();
 
});


it('When Api Encounters Failure', async () => {
  MuseumService.mockReturnValue({Error_Message: 'Error In Fetching Data'});
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<MuseumHome />);
  });
  const instance = tree.root;
  expect(instance.findByProps({testID: 'Error'})).toBeTruthy();
});


it('Navigation Checker', async () => {
  MuseumService.mockReturnValueOnce(Dummy_Data_Set1);
  MuseumService.mockReturnValueOnce(Dummy_Data_Set2);
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<MuseumHome />);
  });
  const instance = tree.root;
 expect(mockNavigate).toHaveBeenCalledTimes(0);
  const wrapper = instance.findAllByProps({testID: 'Navigation_OnPress'});
  await act(async () => {
    wrapper[0].props.onPress();
  });
  expect(mockNavigate).toHaveBeenCalledTimes(1);
});


