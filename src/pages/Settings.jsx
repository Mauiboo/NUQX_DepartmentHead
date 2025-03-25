import React, { useState } from "react";
import { RiEyeLine, RiEyeOffLine, RiCameraLine } from "react-icons/ri";
import userImage from '../images/user.png'; 

const Settings = () => {
  const [formData, setFormData] = useState({
    employeeNumber: "2020-104028",
    email: "salvatored@registrar.national-u.edu",
    firstName: "Damon",
    lastName: "Salvatore",
    middleName: "",
    currentPassword: "SalvatoreD@20",
    newPassword: "DamonS@20",
    confirmPassword: "DamonS@20"
  });

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords({
      ...showPasswords,
      [field]: !showPasswords[field]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile: ", formData);
  };

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1200px', 
      margin: '10rem auto 0 auto',
      backgroundColor: 'white',
      position: 'relative',
      left: '250px',
      width: 'calc(100% - 300px)' 
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '150px 400px',
        gridTemplateRows: 'auto auto',
        gridGap: '20px',
        alignItems: 'start',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Avatar Section */}
        <div style={{
          gridColumn: '1',
          gridRow: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          left: '-220px'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '4px solid #35408E',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            position: 'relative'
          }}>
            <img 
              src={userImage} 
              alt="Avatar" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} 
            />
          </div>
          <button style={{
            position: 'absolute',
            bottom: '-15px',
            right: '0',
            backgroundColor: '#35408E',
            color: 'white',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            left: '60px'
          }}>
            <RiCameraLine size={20} />
          </button>
        </div>

        {/* Edit Profile Section */}
        <div style={{
          gridColumn: '2',
          gridRow: '1',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{
            backgroundColor: '#35408E',
            color: 'white',
            padding: '10px 20px',
            fontSize: '20px',
            textAlign: 'center'
          }}>
            Edit Profile
          </div>
          <div style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '20px',
                color: 'black'
              }}>
                Employee Number*
              </label>
              <input 
                type="text" 
                name="employeeNumber" 
                value={formData.employeeNumber}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}
              />
            </div>
            
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '20px',
                color: 'black'
              }}>
                Email*
              </label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}
              />
            </div>
            
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '20px',
                color: 'black'
              }}>
                First Name*
              </label>
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}
              />
            </div>
            
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '20px',
                color: 'black'
              }}>
                Last Name*
              </label>
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}
              />
            </div>
            
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '20px',
                color: 'black'
              }}>
                Middle Name
              </label>
              <input 
                type="text" 
                name="middleName" 
                value={formData.middleName} 
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div style={{
          position: 'absolute',
          top: '190px',
          left: '0',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          width: '300px',
          zIndex: '1'
        }}>
          <div style={{
            backgroundColor: '#35408E',
            color: 'white',
            padding: '10px 20px',
            fontSize: '20px',
            textAlign: 'center'
          }}>
            Password
          </div>
          <div style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '20px',
                color: 'black'
              }}>
                Current Password*
              </label>
              <div style={{
                position: 'relative'
              }}>
                <input 
                  type={showPasswords.currentPassword ? "text" : "password"} 
                  name="currentPassword" 
                  value={formData.currentPassword} 
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px'
                  }}
                />
                <button 
                  type="button"
                  onClick={() => togglePasswordVisibility('currentPassword')}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '20%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#666'
                  }}
                >
                  {showPasswords.currentPassword ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />}
                </button>
              </div>
            </div>
            
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '20px',
                color: 'black'
              }}>
                New Password*
              </label>
              <div style={{
                position: 'relative'
              }}>
                <input 
                  type={showPasswords.newPassword ? "text" : "password"} 
                  name="newPassword" 
                  value={formData.newPassword} 
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px'
                  }}
                />
                <button 
                  type="button"
                  onClick={() => togglePasswordVisibility('newPassword')}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '20%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#666'
                  }}
                >
                  {showPasswords.newPassword ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />}
                </button>
              </div>
            </div>
            
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '20px',
                color: 'black'
              }}>
                Confirm New Password*
              </label>
              <div style={{
                position: 'relative'
              }}>
                <input 
                  type={showPasswords.confirmPassword ? "text" : "password"} 
                  name="confirmPassword" 
                  value={formData.confirmPassword} 
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px'
                  }}
                />
                <button 
                  type="button"
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '20%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#666'
                  }}
                >
                  {showPasswords.confirmPassword ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div style={{
          gridColumn: '2',
          gridRow: '2',
          display: 'flex',
          transform: 'translateX(90px)', 
          marginTop: '100px',
          

        }}>
          <button 
            onClick={handleSubmit} 
            style={{
              backgroundColor: '#35408E',
              color: 'white',
              padding: '10px 30px',
              fontSize: '20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;