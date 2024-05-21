import classNames from 'classnames';
import styles from './new-componentc.module.scss';

export interface NewComponentcProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponentc = ({ className }: NewComponentcProps) => {
    return <div className={classNames(styles.root, className)}>NewComponentc</div>;
};
