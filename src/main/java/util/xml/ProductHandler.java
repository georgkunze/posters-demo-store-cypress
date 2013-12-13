package util.xml;

import models.PosterSize;
import models.Product;
import models.Product_PosterSize;
import models.SubCategory;
import models.TopCategory;

import org.xml.sax.Attributes;
import org.xml.sax.helpers.DefaultHandler;

import com.avaje.ebean.Ebean;

public class ProductHandler extends DefaultHandler
{

    private String currentValue;

    private Product product;

    @Override
    public void characters(char[] ch, int start, int length)
    {
        currentValue = new String(ch, start, length);
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes atts)
    {
        if (localName.equals("product"))
        {
            product = new Product();
            product.save();
        }
    }

    @Override
    public void endElement(String uri, String localName, String qName)
    {
        if (localName.equals("name"))
        {
            product.setName(currentValue);
            String url = currentValue;
            product.setUrl(url);
        }
        if (localName.equals("shortDescription"))
        {
            product.setDescriptionOverview(currentValue);
        }
        if (localName.equals("longDescription"))
        {
            product.setDescriptionDetail(currentValue);
        }
        if (localName.equals("price"))
        {
            product.setPrice(Double.parseDouble(currentValue));
        }
        if (localName.equals("imageURL"))
        {
            product.setImageURL(currentValue);
        }
        if (localName.equals("subCategory"))
        {
            SubCategory subCategory = Ebean.find(SubCategory.class).where().eq("name", currentValue).findUnique();
            if (subCategory == null)
            {
                subCategory = new SubCategory();
                subCategory.setName(currentValue);
            }
            product.setSubCategory(subCategory);
            TopCategory topCategory = Ebean.find(TopCategory.class).where().eq("subCategories", subCategory)
                                           .findUnique();
            product.setTopCategory(topCategory);
        }
        if (localName.equals("carousel"))
        {
            if (currentValue.equals("true"))
            {
                product.setShowInCarousel(true);
            }
            else
            {
                product.setShowInCarousel(false);
            }
        }
        if (localName.equals("showInTopCategory"))
        {
            if (currentValue.equals("true"))
            {
                product.setShowInTopCategorie(true);
            }
            else
            {
                product.setShowInTopCategorie(false);
            }
        }
        if (localName.equals("product"))
        {
            Ebean.update(product);
        }
        if (localName.equals("availableSize"))
        {
            String[] sizes = currentValue.split(";");
            for (String size : sizes)
            {
                String[] dummy = size.split("x");
                int width = Integer.parseInt(dummy[0]);
                int height = Integer.parseInt(dummy[1]);
                PosterSize posterSize = Ebean.find(PosterSize.class).where().eq("width", width).eq("height", height)
                                             .findUnique();
                if (posterSize == null)
                {
                    posterSize = new PosterSize();
                    posterSize.setWidth(width);
                    posterSize.setHeight(height);
                    posterSize.save();
                }
                Product_PosterSize productPosterSize = new Product_PosterSize();
                productPosterSize.setProduct(product);
                productPosterSize.setSize(posterSize);
                productPosterSize.save();
                product.addAvailableSize(productPosterSize);
            }
        }
    }
}
