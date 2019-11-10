import React from 'react';
import { Route, Switch } from 'react-router';
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
import InformedConsentProjectPage from './components/projects/InformedConsent/InformedConsentProjectPage';
import BlackHealthBookProjectPage from './components/projects/BlackHealthBook/BlackHealthBookProjectPage';
import { ProjectSlug } from './constants';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={AboutPage} />
    <Route path={`/${ProjectSlug.shrumen}`} component={ShrumenProjectPage} />
    <Route path={`/${ProjectSlug.npr}`} component={NPRProjectPage} />
    <Route path={`/${ProjectSlug.waves}`} component={WavesProjectPage} />
    <Route path={`/${ProjectSlug.gitrocket}`} component={GitRocketProjectPage} />
    <Route path={`/${ProjectSlug.versions}`} component={VersionsProjectPage} />
    <Route path={`/${ProjectSlug.dialup}`} component={DialUpProjectPage} />
    <Route path={`/${ProjectSlug.drawachart}`} component={DrawAChartProjectPage} />
    <Route path={`/${ProjectSlug.negativereel}`} component={NegativeReelProjectPage} />
    <Route path={`/${ProjectSlug.topolamp}`} component={TopolampProjectPage} />
    <Route path={`/${ProjectSlug.reflections}`} component={ReflectionsProjectPage} />
    <Route path={`/${ProjectSlug.bikewheelsynth}`} component={BikeWheelSynthProjectPage} />
    <Route path={`/${ProjectSlug.codeasart}`} component={CodeAsArtProjectPage} />
    <Route path={`/${ProjectSlug.futurecity}`} component={FutureCityProjectPage} />
    <Route path={`/${ProjectSlug.informedconsent}`} component={InformedConsentProjectPage} />
    <Route path={`/${ProjectSlug.blackhealthbook}`} component={BlackHealthBookProjectPage} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default Routes;