import { createBoard } from '@wixc3/react-board';
import { NewComponentc } from '../../../components/new-componentc/new-componentc';

export default createBoard({
    name: 'NewComponentc',
    Board: () => <NewComponentc />,
    isSnippet: true,
});