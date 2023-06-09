DROP TABLE IF EXISTS RegionCountry;
DROP TABLE IF EXISTS BeanData;

CREATE TABLE RegionCountry (
    Region VARCHAR(50) NOT NULL,
    Country VARCHAR(50) NOT NULL,
    PRIMARY KEY (Region, Country)
);

CREATE TABLE BeanData (
    Region VARCHAR(50) NOT NULL,
    Country VARCHAR(50) NOT NULL,    
    BeanName VARCHAR(50) NOT NULL,
    BeanRoast VARCHAR(20) NOT NULL,
    BeanFlavorNotes VARCHAR(100) NOT NULL,
    FOREIGN KEY (Region, Country) REFERENCES RegionCountry (Region, Country)
);

INSERT INTO RegionCountry (Region, Country)
VALUES
    ('Latin America', 'Colombia'),
    ('Latin America', 'Brazil'),
    ('Latin America', 'Costa Rica'),
    ('Latin America', 'Guatemala'),
    ('Latin America', 'Mexico'),
    ('Africa', 'Ethiopia'),
    ('Africa', 'Kenya'),
    ('Africa', 'Tanzania'),
    ('Asia', 'Indonesia'),
    ('Asia', 'Vietnam'),
    ('Asia', 'India'),
    ('Central America and Caribbean', 'Jamaica'),
    ('Central America and Caribbean', 'Haiti'),
    ('Central America and Caribbean', 'Dominican Republic'),
    ('Pacific Islands', 'Hawaii'),
    ('Pacific Islands', 'Papua New Guinea'),
    ('Pacific Islands', 'Fiji');

INSERT INTO BeanData (Region, Country, BeanName, BeanRoast, BeanFlavorNotes)
VALUES
    ('Latin America', 'Colombia', 'Colombian', 'Medium', 'Balanced flavors'),
    ('Latin America', 'Brazil', 'Brazilian', 'Medium-Dark', 'Nutty and chocolatey notes'),
    ('Latin America', 'Costa Rica', 'Costa Rican', 'Medium', 'Bright acidity and fruity flavors'),
    ('Latin America', 'Guatemala', 'Guatemalan', 'Medium-Dark', 'Chocolatey and caramel notes'),
    ('Latin America', 'Mexico', 'Mexican', 'Medium', 'Mild and nutty flavors'),
    ('Africa', 'Ethiopia', 'Ethiopian', 'Medium', 'Fruity and floral characteristics'),
    ('Africa', 'Kenya', 'Kenyan', 'Medium-Dark', 'Bright acidity and complex flavors'),
    ('Africa', 'Tanzania', 'Tanzanian', 'Medium', 'Medium body and bright acidity'),
    ('Asia', 'Indonesia', 'Indonesian', 'Dark Level', 'Earthy and spicy flavors'),
    ('Asia', 'Vietnam', 'Vietnamese Robusta', 'Dark Level', 'Bold and bitter taste'),
    ('Asia', 'India', 'Mysore', 'Medium-Dark', 'Heavy body and low acidity'),
    ('Asia', 'India', 'Malabar', 'Medium-Dark', 'Heavy body and low acidity'),
    ('Central America and Caribbean', 'Jamaica', 'Jamaican Blue Mountain', 'Medium', 'Mild flavor, brightness, and smoothness'),
    ('Central America and Caribbean', 'Haiti', 'Haitian', 'Medium-Dark', 'Rich and chocolatey flavor'),
    ('Central America and Caribbean', 'Dominican Republic', 'Dominican', 'Medium', 'Mild and smooth taste with nutty undertones'),
    ('Pacific Islands', 'Hawaii', 'Hawaiian Kona', 'Medium', 'Delicate and smooth flavor'),
    ('Pacific Islands', 'Papua New Guinea', 'Papua New Guinean', 'Medium', 'Medium body, low acidity, and hints of spice'),
    ('Pacific Islands', 'Fiji', 'Fijian', 'Medium', 'Bright acidity, medium body, and fruity flavors');
