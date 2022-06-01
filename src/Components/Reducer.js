export default function reducer(state,action)
{
    switch(action.type)
    {
        case 'Details':
            return {...state,Data:action.data};
        case 'Error':
            return {...state,Error_Message:action.Error};
        case 'Loader':
                return {...state,Loading:action.data};
            default:
                throw new Error(); 
    }
}