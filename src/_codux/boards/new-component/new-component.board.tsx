import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../components/new-component/new-component';
import NewComponent_board_module from './new-component.board.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'NewComponent',
    Board: () => (
        <NewComponent
            className={Classnames(
                NewComponent_board_module.kkkkk,
                NewComponent_board_module.kkkkkk,
            )}
        />
    ),
    isSnippet: true,
});
