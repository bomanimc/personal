import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import ShrumenProjectPage from './components/projects/Shrumen/ShrumenProjectPage';
import NPRProjectPage from './components/projects/NPR/NPRProjectPage';
import WavesProjectPage from './components/projects/Waves/WavesProjectPage';
import GitRocketProjectPage from './components/projects/GitRocket/GitRocketProjectPage';
import VersionsProjectPage from './components/projects/Versions/VersionsProjectPage';
import DialUpProjectPage from './components/projects/DialUp/DialUpProjectPage';
import DrawAChartProjectPage from './components/projects/DrawAChart/DrawAChartProjectPage';
import NegativeReelProjectPage from './components/projects/NegativeReel/NegativeReelProjectPage';
import TopolampProjectPage from './components/projects/Topolamp/TopolampProjectPage';
import ReflectionsProjectPage from './components/projects/Reflections/ReflectionsProjectPage';
import BikeWheelSynthProjectPage from './components/projects/BikeWheelSynth/BikeWheelSynthProjectPage';
import CodeAsArtProjectPage from './components/projects/CodeAsArt/CodeAsArtProjectPage';
import FutureCityProjectPage from './components/projects/FutureCity/FutureCityProjectPage';
import { ProjectSlug } from './constants';

const routes = (
  <Route path={`${process.env.PUBLIC_URL}/`} component={App}>
    <IndexRoute component={HomePage} />
    <Route path={'/about'} component={AboutPage} />
    <Route path={ProjectSlug.shrumen} component={ShrumenProjectPage} />
    <Route path={ProjectSlug.npr} component={NPRProjectPage} />
    <Route path={ProjectSlug.waves} component={WavesProjectPage} />
    <Route path={ProjectSlug.gitrocket} component={GitRocketProjectPage} />
    <Route path={ProjectSlug.versions} component={VersionsProjectPage} />
    <Route path={ProjectSlug.dialup} component={DialUpProjectPage} />
    <Route path={ProjectSlug.drawachart} component={DrawAChartProjectPage} />
    <Route path={ProjectSlug.negativereel} component={NegativeReelProjectPage} />
    <Route path={ProjectSlug.topolamp} component={TopolampProjectPage} />
    <Route path={ProjectSlug.reflections} component={ReflectionsProjectPage} />
    <Route path={ProjectSlug.bikewheelsynth} component={BikeWheelSynthProjectPage} />
    <Route path={ProjectSlug.codeasart} component={CodeAsArtProjectPage} />
    <Route path={ProjectSlug.futurecity} component={FutureCityProjectPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
