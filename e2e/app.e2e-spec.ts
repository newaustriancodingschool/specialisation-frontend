import { AppPage } from './app.po';
import {browser} from 'protractor';
import * as protractorImageComparison from 'protractor-image-comparison';
import {Page1Component} from '../src/app/app-pset-htmlandcss/page1/page1.component';

describe('specialisation-frontend App', () => {
  beforeEach(() => {
    browser.protractorImageComparison = new protractorImageComparison({
      baselineFolder: './baseline/',
      screenshotPath: './.tmp/'
    });
  });

  it('should match the screenshot for page-1', () => {
    browser.get('/page1');
    expect(browser.protractorImageComparison.checkScreen('page1')).toEqual(0);
  });
});
