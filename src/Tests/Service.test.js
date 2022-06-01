import MuseumService from '../Service/MuseumService'
import mockAxios from 'axios'
jest.mock('axios')

it('Testing For Successful API call', async () => {
    const NewData = {"objectID":321388,"isHighlight":false};
    mockAxios.get.mockResolvedValue({data:NewData});
    const result = await MuseumService();
    expect(result).toStrictEqual(NewData);
    
  });

  it('Testing For Failure API call', async () => {
      const Error={
    Error_Message:"Not Found"
    };
    mockAxios.get.mockRejectedValue();
    const result=await MuseumService();
    expect(result).toStrictEqual(Error);
  });