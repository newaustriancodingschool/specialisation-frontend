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
    browser.driver.manage().window().setSize(1024, 741);
  });

  it('should match the screenshot for page1', () => {
    browser.get('/page1');
    browser.sleep(2000);
    expect(browser.protractorImageComparison.checkScreen('page1')).toEqual(0);
  });
  it('should match the screenshot for page2', () => {
    browser.get('/page2');
    browser.sleep(5000);
    expect(browser.protractorImageComparison.checkScreen('page2'))
      .toEqual(0);
  });
  it('should match the screenshot for page3', () => {
    browser.get('/page3');
    browser.sleep(5000);
    expect(browser.protractorImageComparison.checkScreen('page3'))
      .toEqual(0);
  });
});
