import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import AppStateHOC from '../lib/app-state-hoc.jsx';
import ErrorBoundaryHOC from '../lib/error-boundary-hoc.jsx';
import HashParserHOC from '../lib/hash-parser-hoc.jsx';
import TWThemeHOC from '../lib/tw-theme-hoc.jsx';
import SBFileUploaderHOC from '../lib/sb-file-uploader-hoc.jsx';
import GUI from './render-gui.jsx';
import MenuBar from '../components/menu-bar/menu-bar.jsx';
import runAddons from '../addons/entry';
import styles from './playground.css';

const handleClickAddonSettings = () => {
    window.open('addons.html');
};

const WrappedMenuBar = compose(
    SBFileUploaderHOC
)(MenuBar);

runAddons();

const Playground = props => {
    const {
        /* eslint-disable no-unused-vars */
        isFullScreen,
        isPlayerOnly,
        isRtl,
        onClickTheme,
        /* eslint-enable no-unused-vars */
        ...guiProps
    } = props;
    const isHomepage = isPlayerOnly && !isFullScreen;
    const isEditor = !isPlayerOnly;
    return (
        <div
            className={classNames(styles.container, {
                [styles.playerOnly]: isHomepage,
                [styles.editor]: isEditor
            })}
        >
            {isHomepage ? (
                <div className={styles.menu}>
                    <WrappedMenuBar
                        canChangeLanguage
                        canManageFiles
                        enableSeeInside
                        onClickAddonSettings={handleClickAddonSettings}
                        onClickTheme={onClickTheme}
                    />
                </div>
            ) : null}
            <div
                className={styles.center}
                style={isPlayerOnly ? ({
                    // add a couple pixels to account for border
                    width: `${Math.max(480, props.customStageSize.width) + 2}px`
                }) : null}
            >
                <GUI
                    onClickAddonSettings={handleClickAddonSettings}
                    onClickTheme={onClickTheme}
                    backpackVisible
                    backpackHost="_local_"
                    {...guiProps}
                />
                {isHomepage && (
                    <div>
                        <p>{'TurboWarp/scratch-gui development playground'}</p>
                        <p>{'To load projects, enter the project ID as the URL hash.'}</p>
                        <p><a href="https://github.com/TurboWarp/scratch-gui">{'GitHub'}</a></p>
                    </div>
                )}
            </div>
        </div>
    );
};

Playground.propTypes = {
    customStageSize: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
    }),
    isFullScreen: PropTypes.bool,
    isPlayerOnly: PropTypes.bool,
    isRtl: PropTypes.bool,
    onClickTheme: PropTypes.func
};

const mapStateToProps = state => ({
    customStageSize: state.scratchGui.customStageSize,
    isFullScreen: state.scratchGui.mode.isFullScreen,
    isPlayerOnly: state.scratchGui.mode.isPlayerOnly,
    isRtl: state.locales.isRtl
});

const mapDispatchToProps = () => ({});

const ConnectedPlayground = connect(
    mapStateToProps,
    mapDispatchToProps
)(Playground);

const WrappedPlayground = compose(
    AppStateHOC,
    ErrorBoundaryHOC('Playground'),
    HashParserHOC,
    TWThemeHOC
)(ConnectedPlayground);

export default WrappedPlayground;
