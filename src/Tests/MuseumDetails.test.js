import React from 'react';
import TestRenderer, {act} from 'react-test-renderer';
import MuseumDetails from '../Components/MuseumDetails'

const Dummy_Data_Set1 ={"params":{"primaryImageSmall":"https://images.metmuseum.org/CRDImages/an/web-large/DP-12979-001.jpg",creditLine:"Purchase",
accessionYear:"2021",dimensions:"5*6",department:"123",objectURL:"WWW",artistDisplayName:"Dinesh"}}

const Dummy_Data_Set2 ={"params":{creditLine:"Purchase",
accessionYear:"2021",dimensions:"5*6",department:"123",objectURL:"WWW",artistDisplayName:"Dinesh"}}


it('When Complete Data Is Present', async () => {
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<MuseumDetails route={Dummy_Data_Set1}/>);
  });
  const instance = tree.root;
  expect(instance.findByProps({testID: 'PrimaryImage'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Credit'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Artist'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Acquired'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Measurement'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Department'})).toBeTruthy();
  expect(instance.findByProps({testID: 'View_On_Site'})).toBeTruthy();
});



it('When Image Data Is Absent', async () => {
    var tree;
    await act(async () => {
      tree = TestRenderer.create(<MuseumDetails route={Dummy_Data_Set2}/>);
    });
    const instance = tree.root;
    expect(instance.findByProps({testID: 'Alt_Image'})).toBeTruthy();
    expect(instance.findByProps({testID: 'Credit'})).toBeTruthy();
    expect(instance.findByProps({testID: 'Artist'})).toBeTruthy();
    expect(instance.findByProps({testID: 'Acquired'})).toBeTruthy();
    expect(instance.findByProps({testID: 'Measurement'})).toBeTruthy();
    expect(instance.findByProps({testID: 'Department'})).toBeTruthy();
    expect(instance.findByProps({testID: 'View_On_Site'})).toBeTruthy();
  });
  
