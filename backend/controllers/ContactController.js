const contactService = require('../services/ContactService');

const VALID_MARKETPLACES = [
  'United States', 'Canada', 'Mexico', 'United Kingdom', 'European Union',
  'United Arab Emirates', 'Saudi Arabia', 'Australia', 'Japan', 'India', 'Other',
];

const VALID_SERVICES = [
  'Complete Account Management', 'Listings and Catalog', 'Inventory and FBA',
  'Order Management', 'Returns and Refunds', 'Amazon Advertising',
  'Pricing and Promotions', 'Account Health', 'Seller Support Cases',
  'Appeals and Reinstatement Support', 'Buyer Messaging',
  'Brand Analytics and A+ Content', 'Other',
];

const sanitizeString = (str) => {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '').trim().slice(0, 500);
};

const createContact = async (req, res) => {
  try {
    const body = req.body || {};

    const fullName = body.fullName || '';
    const emailAddress = body.emailAddress || '';
    const companyName = body.companyName || '';
    const country = body.country || '';
    const marketplace = body.marketplace || '';
    const service = body.service || '';
    const message = body.message || '';
    const phoneNumber = body.phoneNumber || '';
    const sellerType = body.sellerType || '';
    const preferredContact = body.preferredContact || '';

    if (!fullName || !emailAddress || !companyName || !country || !marketplace || !service || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    if (!VALID_MARKETPLACES.includes(marketplace)) {
      return res.status(400).json({ message: 'Invalid marketplace selection' });
    }

    if (!VALID_SERVICES.includes(service)) {
      return res.status(400).json({ message: 'Invalid service selection' });
    }

    const contactData = {
      fullName: sanitizeString(fullName),
      emailAddress: sanitizeString(emailAddress),
      companyName: sanitizeString(companyName),
      country: sanitizeString(country),
      marketplace,
      service,
      message: sanitizeString(message),
      phoneNumber: phoneNumber ? sanitizeString(phoneNumber) : '',
      sellerType: sellerType ? sanitizeString(sellerType) : '',
      preferredContact: preferredContact || '',
    };

    const contact = await contactService.createContact(contactData);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await contactService.getContactById(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contactData = req.body;
    const contact = await contactService.updateContact(id, contactData);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await contactService.deleteContact(id);
    if (result) {
      res.status(200).json({ message: 'Contact deleted successfully' });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
};
