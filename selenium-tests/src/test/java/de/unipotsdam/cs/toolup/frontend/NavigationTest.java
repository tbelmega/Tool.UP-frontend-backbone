package de.unipotsdam.cs.toolup.frontend;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import java.awt.*;
import java.awt.event.KeyEvent;
import java.util.List;

import static org.testng.AssertJUnit.assertEquals;

/**
 * Navigation tests check if the user lands on the correct page after taking an action.
 *
 * To identify the pages, this set of navigation tests uses the page title.
 * This set of tests is independent of the application data.
 */
public class NavigationTest {

    public static final String URL = "http://localhost/index.html";

    public static final String ID_READY = "ready";
    public static final String ID_MAIN_CONTENT = "main-content";

    public static final String LINK_HOMEPAGE = "Startseite";
    public static final String LINK_CATEGORIES = "Kategorien";
    public static final String LINK_FEATURE_LOOKUP = "Feature-Suche";
    public static final String LINK_IMPRESSUM = "Impressum";

    public static final String TITLE_TOOL_UP = "Tool.UP";
    public static final String TITLE_CATEGORIES = "Tool.UP Kategorien";
    public static final String TITLE_FEATURE_LOOKUP = "Tool.UP Feature-Suche";
    public static final String TITLE_IMPRESSUM = "Tool.UP Impressum";
    public static final String TITLE_CATEGORY = "Tool.UP Kategorie";
    public static final String TITLE_SEARCH = "Tool.UP Suche";

    public static final String TITLE_APPLICATION = "Tool.UP Applikation";
    public static final String CSS_SELECTOR_CATEGORY_LINK = ".business-object-list li a";
    public static final String CSS_SELECTOR_APPLICATION_LINK = ".application-list li a";
    public static final String NAME_FEATURE_CHECKBOXES = "feature-checkboxes";

    public static WebDriverWait firefoxWait;
    public static WebDriver firefoxDriver;


    @BeforeSuite
    public static void setUpBeforeSuite() throws Exception {
        //set up selenium driver
        firefoxDriver = new FirefoxDriver();
        firefoxWait = new WebDriverWait(firefoxDriver, 30);
    }

    @AfterSuite
    public static void tearDownAfterSuite() throws Exception {
        firefoxDriver.close();
    }

    @BeforeMethod(timeOut = 3000)
    public void setUp() throws Exception {
        firefoxDriver.get(URL);
        firefoxWait.until(ExpectedConditions.presenceOfElementLocated(By.id(ID_MAIN_CONTENT)));
    }

    @Test(timeOut = 3000)
    public void testThat_clickOnHome_showsHomePage() {
        //click "Startseite"
        firefoxDriver.findElement(By.linkText(LINK_HOMEPAGE)).click();
        firefoxWait.until(ExpectedConditions.presenceOfElementLocated(By.id(ID_MAIN_CONTENT)));

        //assert
        assertEquals(TITLE_TOOL_UP, firefoxDriver.getTitle());
    }

    @Test(timeOut = 3000)
    public void testThat_clickOnCategories_showsCategoriesPage() {
        //click "Kategorien"
        firefoxDriver.findElement(By.linkText(LINK_CATEGORIES)).click();
        firefoxWait.until(ExpectedConditions.presenceOfElementLocated(By.id(ID_MAIN_CONTENT)));

        //assert
        assertEquals(TITLE_CATEGORIES, firefoxDriver.getTitle());
    }

    @Test(timeOut = 3000)
    public void testThat_clickOnFeatureSearch_showsLookupPage() {
        //click "Feature-Suche"
        firefoxDriver.findElement(By.linkText(LINK_FEATURE_LOOKUP)).click();
        firefoxWait.until(ExpectedConditions.presenceOfElementLocated(By.id(ID_MAIN_CONTENT)));

        //assert
        assertEquals(TITLE_FEATURE_LOOKUP, firefoxDriver.getTitle());
    }

    @Test(timeOut = 3000)
    public void testThat_clickOnImpressum_showsImpressumPage() throws Exception {
        //click "Impressum"
        firefoxDriver.findElement(By.linkText(LINK_IMPRESSUM)).click();
        firefoxWait.until(ExpectedConditions.presenceOfElementLocated(By.id(ID_MAIN_CONTENT)));

        //assert
        assertEquals(TITLE_IMPRESSUM, firefoxDriver.getTitle());
    }

    @Test(timeOut = 3000)
    public void testThat_clickOnATopLevelCategory_showsCategoryPage() {
        //wait for the categories to be displayed
        firefoxWait.until(ExpectedConditions.presenceOfElementLocated(By.id(ID_READY)));

        //click on a category
        firefoxDriver.findElement(By.cssSelector(CSS_SELECTOR_CATEGORY_LINK)).click();
        firefoxWait.until(ExpectedConditions.presenceOfElementLocated(By.id(ID_READY)));

        //assert
        assertEquals(TITLE_CATEGORY, firefoxDriver.getTitle());
    }

    @Test(timeOut = 3000)
    public void testThat_clickOnACategory_showsCategoryPage() {
        //navigate to Categories page
        firefoxDriver.findElement(By.linkText(LINK_CATEGORIES)).click();
        firefoxWait.until(ExpectedConditions.presenceOfElementLocated(By.id(ID_MAIN_CONTENT)));

        //click on a category
        firefoxDriver.findElement(By.cssSelector(CSS_SELECTOR_CATEGORY_LINK)).click();
        firefoxWait.until(ExpectedConditions.presenceOfElementLocated(By.id(ID_READY)));

        //assert
        assertEquals(TITLE_CATEGORY, firefoxDriver.getTitle());
    }

    @Test(timeOut = 3000)
    public void testThat_clickOnAnApplications_showsApplicationPage() {
        //navigate to Feature Lookup page
        firefoxDriver.findElement(By.linkText(LINK_FEATURE_LOOKUP)).click();
        firefoxWait.until(ExpectedConditions.presenceOfElementLocated(By.id(ID_READY)));

        //click feature checkboxes
        List<WebElement> checkboxes = firefoxDriver.findElements(By.name(NAME_FEATURE_CHECKBOXES));
        for (WebElement checkbox: checkboxes) {
            if (!checkbox.isSelected()) checkbox.click();
        }

        //click on an application
        firefoxDriver.findElement(By.cssSelector(CSS_SELECTOR_APPLICATION_LINK)).click();

        //assert
        assertEquals(TITLE_APPLICATION, firefoxDriver.getTitle());
    }

    @Test(timeOut = 3000)
    public void testThat_clickOnSearchButton_showsSearchResult() throws Exception {
        //navigate to Feature Lookup page
        firefoxDriver.findElement(By.id("search-string-input")).click();
        typeString("Description");
        firefoxDriver.findElement(By.linkText("Suche")).click();
        firefoxWait.until(ExpectedConditions.presenceOfElementLocated(By.id(ID_READY)));

        //assert
        assertEquals(TITLE_SEARCH, firefoxDriver.getTitle());
    }



    private void typeString(String input) throws AWTException {
        Robot robot = new Robot();
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (Character.isUpperCase(c)) {
                robot.keyPress(KeyEvent.VK_SHIFT);
            }
            robot.keyPress(Character.toUpperCase(c));
            robot.keyRelease(Character.toUpperCase(c));

            if (Character.isUpperCase(c)) {
                robot.keyRelease(KeyEvent.VK_SHIFT);
            }
        }
        robot.delay(500);
    }


}
